export async function GET({ params }) {

    return new Response("Hello", {
        status: 200,
        statusText: 'OK',

    });

}