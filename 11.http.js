const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    // Set the Content-Type header to indicate that the response is plain text
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.write(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim laborum delectus 
        dignissimos hic quaerat adipisci dicta, earum tenetur totam optio. Perspiciatis reprehenderit 
        error velit doloremque enim harum blanditiis corrupti soluta debitis laboriosam vel aspernatur 
        pariatur facere dolor aliquid amet, magnam atque ullam! Ut architecto vel expedita quibusdam voluptate
        rem magni officiis repudiandae corrupti porro debitis, praesentium exercitationem reiciendis ipsum voluptatem
        voluptatibus doloremque et ad officia consectetur minus. Molestiae vitae aliquam doloribus. Repellendus minima ut 
        eum assumenda aspernatur maxime neque omnis culpa hic`);
    } else if (req.url === '/about') {
        res.write("Thanks for visiting the about section.");
    } else if (req.url === '/about/pk') {
        res.write("Thank you, PK!");
    } else {
        // Handling requests for unknown paths with status code 404
        res.writeHead(404);
        res.write("404 Not Found");
    }

    // End the response
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
