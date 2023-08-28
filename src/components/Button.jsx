
const Button = ({label, iconURL}) => {
  return (
   <button className="flex gap-2 justify-center items-center px-7 py-4 font-montserrat text-lg leading-none bg-coral-red border text-white rounded-full border-coral-red ">
    {label}
   <img className="ml-2 rounded-full h-5 w-5" src={iconURL} alt="." />
   </button>
  )
}

export default Button