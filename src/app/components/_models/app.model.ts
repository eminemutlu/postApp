
export class AppModel {
    _id!: string;
    user!: UserModel;
    counts!: CountsModel;
    postedAt!: string;
    kind!: string;
    shortcode!: string;
    caption!: string;
    status!: string;
    result: any
}

class UserModel {    
    username!: string;
    counts!: FollowedByCountModel;
    profilePicUrl!: string;
 }

 class FollowedByCountModel {
    followedBy!: number;
}

class CountsModel {    
    likes!: number;
    comments!: number;
 }