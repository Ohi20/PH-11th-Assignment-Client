import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className='border  container text-bold blogs '>
            <div>
                <h2 className='text-info'>Difference between Node.JS and Javascript-</h2>
                <p>Javascript is a programming language that is used for writing scripts on the website.
                    NodeJS is a Javascript runtime environment.
                    Javascript can only be run in the browsers.
                    We can run Javascript outside the browser with the help of NodeJS.
                    It is basically used on the client-side.
                    It is mostly used on the server-side.
                    Javascript is capable enough to add HTML and play with the DOM.
                    Nodejs does not have capability to add HTML tags.
                    It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                    Nodejs is written in C, C++ and Javascript.</p>
            </div>
            <div>
                <h2 className='text-info'>When should you use node.js?</h2>
                <p>Easy learning curve- Knowing JavaScript gives a developer a good start with Node.js. Of course, you need to know the backend development principles, however, the knowledge of the programming language will simplify things a lot.
                Large community. Node.js, being an open-source project, encourages support and contribution aimed at the improvement and adoption of the platform. This is the mission of its Foundation intended for continuous development and enhancement of Node.js. Therefore, you can be sure that, on one hand, Node.js is always getting better and, on the other hand, there are already a lot of reusable resources.Robustness. Using Node.js allows organizing full-stack JavaScript development ensuring the speed and performance of the application.Scalability. This is a true jewel of the Node.js development environment, as it allows building applications that can easily grow with your business. Node.js works great in systems using the microservices architecture or containerization where scalability and flexibility can be achieved quickly and easily.Great ecosystem. Browse npm Node.js package manager for 650,000 free code packages that you can reuse with Node.js
                </p>
                <h2 className='text-info'>when should you use mongodb?</h2>
                <p>MongoDB is built on a scale-out architecture that has become popular with developers.As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.Document Model-The document data model is a powerful way to store and retrieve data in any modern programming language, allowing developers to move quickly.Deployment Options-
MongoDB is available in any major public cloud such as AWS, Azure, and Google Cloud through MongoDB Atlas, in large data centers through the Enterprise Advanced edition, or free through the open-source Community edition.
Get Started Quickly-
MongoDB has a great user experience for developers who can install MongoDB and start writing code immediately.
Fully Scalable-
MongoDB’s horizontal, scale-out architecture can support huge volumes of both data and traffic.
Find Community
MongoDB has developed a large and mature platform ecosystem</p>
            </div>
            <div>
         <h2 className='text-info'>Differences between sql and nosql databases-</h2>
         <p>	SQL databases are primarily called RDBMS or Relational Databases
NoSQL databases are primarily called as Non-relational or distributed databas
	Structured query language SQL
No declarative query language
	SQL databases are table based databases
NoSQL databases can be document based, key-value pairs, graph databases
SQL databases are vertically scalable
NoSQL databases are horizontally scalable
	Oracle, Postgres, and MS-SQL.
MongoDB, Redis, Neo4j, Cassandra, Hbase.
Specialized DB hardware
Oracle Exadata, etc.
Commodity hardware
Cross-platform support, Secure and free
Easy to use, High performance, and Flexible tool.</p>   
            </div>
            <div>
                <h2 className='text-info'>What is the purpose of jwt and how does it work?</h2>
                <p>A JWT is a mechanism to verify the owner of some JSON data. It’s an encoded, URL-safe string that can contain an unlimited amount of data unlike a cookie and is cryptographically signed.

When a server receives a JWT, it can guarantee the data it contains can be trusted because it’s signed by the source. No middleman can modify a JWT once it’s sent.JWT is a particularly useful technology for API authentication and server-to-server authorization.you get a secret token from the service when you set up the API:On the client side, you create the token (there are many libraries for this) using the secret token to sign it.

When you pass it as part of the API request, the server will know it’s that specific client because the request is signed with its unique identifier:</p>
            </div>
        </div>
    );
};

export default Blogs;