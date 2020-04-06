export default class UserAuth {
    public landingPageShown: boolean = false
    getToken(): Promise<string> {
        return new Promise(re => {
            setTimeout(() => {
                re('token')
            }, 1000)

        })
    }
}