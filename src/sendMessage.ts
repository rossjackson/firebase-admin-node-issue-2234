import { getMessaging } from 'firebase-admin/messaging'

export const sendMessage = async () => {
    try {
        await getMessaging().sendEachForMulticast({
            data: {
                hello: 'world',
            },
            notification: {
                title: 'test title',
                body: 'test body',
            },
            tokens: ['<INSERT CORRECT TOKEN>'],
        })
        console.log('message sent')
    } catch (e) {
        console.error(e)
    }
}
