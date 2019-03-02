import * as cors from 'cors'

const corsHandler = cors({ origin: true })

export const myFunc = functions.https.onRequest(async (req, res) => {
    corsHandler(req, res, () => {
        console.log("req", req);
        console.log('res', res);
    })
)

