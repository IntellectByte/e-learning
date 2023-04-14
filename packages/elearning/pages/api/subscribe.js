import Mailchimp from '@mailchimp/mailchimp_marketing';

Mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us17',
});

export default async (req, res) => {
    const { email, name } = req.body;

    try {
        const response = await Mailchimp.lists.addListMember('69cfcfd45d', {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                MERGE1: name,
            },
        });

        res.status(200).json({ status: response.status });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};