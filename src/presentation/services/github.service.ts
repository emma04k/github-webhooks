import { GitHubStartPayload, GitHubIssuePayload } from "../../interfaces";

export class GitHubService {
    constructor() {}
    onStart(payload: GitHubStartPayload):string {
        const {action, sender, repository, starred_at } = payload;
        return `User ${sender.login} ${action} starred the repository ${repository.full_name}`;
        
    }

    onIssues(payload: GitHubIssuePayload):string {
        const {action, sender, repository, issue} = payload;
        return `User ${sender.login} ${action} issue #${issue.number} in repository ${repository.full_name}`;
    }
}