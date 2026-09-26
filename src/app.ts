import express from 'express';
import { envs } from './config';
import { GitHubController } from './presentation/github/controller';
import { GithubSha256Middleware } from './presentation/middlewares/github-sha256.middleware';

(()=>{
    main();
})();

function main() {
    const app = express();

    app.use(express.json());
    app.use(GithubSha256Middleware.VerifyGithubSignature);

    const controller = new GitHubController();

    app.post('/api/github',controller.webhookHandler);

    app.listen(envs.PORT, () => {
        console.log(`Server is running on port ${envs.PORT}`);
    });
}