// @ts-nocheck

import "./console.js"

// export const onRequest = async ({ next }) => {
// 	const response = await next();
// 	response.headers.set("x-custom", "header value");
// 	return response;
// };



export const errorHandler = async ({ next }) => {

  try {
    
    // wait for the next function to finish
   
  } catch (err) {

    console.warn(err)
    // catch and report and errors when running the next function
   // return new Response( { status: 200 })
  }
   return await next()
}


//export const onRequest = errorHandler;