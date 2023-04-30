
const page = ({params}) => { //params is basically id 
    const id = params.dynamicId; //destructuring id from params here params.'dynamicfilename'
    console.log(id);
  return (
    <h1>I am Dynamic {id}</h1>
  )
}

export default page