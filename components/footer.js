import Link from "next/link"

const Footer = () => (
  <div className="container" style={{paddingLeft: "60%", marginBottom:"10px"}}>
    <Link href="https://www.linkedin.com/in/mariano-salvador-villaescusa-11364aaa/">
      <img src="linkedin.png" alt="linkedin" width={"50px"} style={{borderRadius:"100%"}}/>
    </Link>
    <Link href="https://github.com/marsavil">
      <img src="github.png" alt="linkedin" width={"50px"} style={{borderRadius:"100%"}}/>
    </Link>
  </div>
)

export default Footer