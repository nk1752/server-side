export default function Server() {

    

    function getData() {
        let msg = process.env.SERVER_MESSAGE

        return (

            msg

        );
    }
    
    console.log('Server page rendering')

    return (
        <div>
            <h1>Server Side Page</h1>
            <p>Server var: {getData()}</p>
        </div>

    );
}