"use strict"

module.exports = (event, context, callback) => {
    let err;
    const result =             {
        status: "You said: " + JSON.stringify(event.body)
    };

    context
        .status(200);

    callback(err, {"result": "message received"});
}
