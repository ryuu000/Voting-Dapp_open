import "wasi"; // Import WASI support (WebAssembly System Interface)
import { Contract } from "@assemblyscript/contract";

class Profile {
  name: string = "";
  bio: string = "";
  profilePicture: string = "";
  isWellnessProfessional: boolean = false;
}

class Vote {
  voter: string = "";
  timestamp: u64 = 0;
}

class WellnessProfiles extends Contract {
  profiles: Map<string, Profile> = new Map<string, Profile>();
  stakes: Map<string, u64> = new Map<string, u64>();
  votes: Map<string, Map<string, Vote>> = new Map<string, Map<string, Vote>>();
  cooldownPeriod: u64 = 86400; // 1 day in seconds

  createProfile(name: string, bio: string, profilePicture: string, isWellnessProfessional: boolean): void {
    const sender = this.msg.sender;
    const profile = new Profile();
    profile.name = name;
    profile.bio = bio;
    profile.profilePicture = profilePicture;
    profile.isWellnessProfessional = isWellnessProfessional;
    this.profiles.set(sender, profile);
  }

  setWellnessProfessionalStatus(isWellnessProfessional: boolean): void {
    const sender = this.msg.sender;
    const profile = this.profiles.get(sender);
    if (profile) {
      profile.isWellnessProfessional = isWellnessProfessional;
      this.profiles.set(sender, profile);
    }
  }

  stakeTokens(amount: u64): void {
    const sender = this.msg.sender;
    const currentStake = this.stakes.get(sender) || 0;
    this.stakes.set(sender, currentStake + amount);
  }

  voteForService(wellnessProfessional: string): void {
    const sender = this.msg.sender;
    const senderStake = this.stakes.get(sender) || 0;
    const wellnessProfile = this.profiles.get(wellnessProfessional);

    if (senderStake > 0 && wellnessProfile && wellnessProfile.isWellnessProfessional) {
      const senderVotes = this.votes.get(sender) || new Map<string, Vote>();
      const lastVote = senderVotes.get(wellnessProfessional);
      const currentTime = this.block.timestamp;

      if (!lastVote || lastVote.timestamp + this.cooldownPeriod < currentTime) {
        const vote = new Vote();
        vote.voter = sender;
        vote.timestamp = currentTime;
        senderVotes.set(wellnessProfessional, vote);
        this.votes.set(sender, senderVotes);
      }
    }
  }
}

export default WellnessProfiles;
