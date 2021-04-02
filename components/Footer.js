const Footer = () => {
    return (
        <div className="bg-dark text-white text-center px-4 md:px-12 xl:px-40 flex flex-wrap justify-center items-center">
          <img
                  className="block h-32 w-full lg:w-1/3"
                  src="../img/SRB-White-01.svg"
                  alt="SRB Logo"
                />
          <div className="font-bodytext py-8 text-white w-full lg:w-1/3">
            &copy; Schomburg Road Baptist Church <br />
            7155 Schomburg Road<br />
            Columbus, GA 31909
          </div>
          <div className="w-full text-white pb-6 lg:pb-0 lg:w-1/3">
              <span className="font-bold">Sundays</span>
              <ul className="text-center">
                  <li>09:15 AM Sunday School</li>
                  <li>10:30 AM Service</li>
              </ul>
          </div>
        </div>
    )
}

export default Footer
