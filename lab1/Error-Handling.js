// try-catch-finally
try {
    const data = JSON.parse('{"name": "Alice"}');
    console.log(data.name);

    const badData = JSON.parse('not valid JSON');
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Finally block executes");
}