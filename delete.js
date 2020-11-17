import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        // 'Key' defines the partition key and sort key of the item to be removed
        Key: {
            userId: "USER-SUB-1234",
            noteId: "7d0bfa70-286f-11eb-b736-6d81de2d9473"
        },
    };

    await dynamoDb.delete(params);

    return { status: true };
});