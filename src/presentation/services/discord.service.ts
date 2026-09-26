import { envs } from "../../config";

export class DiscordService {
    
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() {}

    async notify(message:string){
        const body ={
            content: message,
            embeds: [{
                image: {
                    url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDlvM29xc2Z3ZHQ4NXpucXJqdm45bWRmbzByYWR4dHFwc2hka2g3YyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif"
                }
            }]
        }

        const response = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            console.log(`Failed to send message to Discord webhook: ${response.statusText}`);
            return false;
        }

        return true;
    }

}