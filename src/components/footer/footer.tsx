import {
  FaCcMastercard,
  FaCcVisa,
  FaFacebookSquare,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="min-h-[85px] sm:min-h-[233px] lg:min-h-[85px] w-full bg-[#353535] lg:flex justify-around mt-5 items-center">
      <div className="flex justify-center items-center pt-4 gap-3 lg:m-0 mb-7">
        <FaFacebookSquare size={32} color="white" />
        <FaLinkedinIn size={32} color="white" />
        <IoLogoInstagram size={32} color="white" />
        <FaYoutube size={32} color="white" />
      </div>
      <div className="flex justify-center items-center pt-4 gap-3 lg:m-0 mb-12 ">
        <FaCcVisa size={32} color="white" />
        <FaCcMastercard size={32} color="white" />
        <FaCcVisa size={32} color="white" />
        <FaCcMastercard size={32} color="white" />
      </div>
      <div className="flex justify-center items-center gap-7 lg:pb-0 pb-7">
        <div>
          <p className="text-[12px] text-white">Powered by</p>
          <img
            className="h-7"
            src="https://s3-alpha-sig.figma.com/img/63b8/54bd/0b5cea783a690408465314bfaac62d5e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUzB~QH2siGat8smqjPIi-LOsWqKmPDd0X27zXNj62u1-89czCtEVKxqAATUrxh4Q6w-Pe2D1XRUNzpVstyY1viiQWn90clKkTfSEhpQfvVhIUJqDQQRLxUtUB95rTXmnkkBbp4kkd7YDtTe5SEaDpGK212xEX6aD8o97DtN2rsz1R~Cex0f6PhgTvcoDHnB-C5Px1JSIsy7cp79BPmxS72qB5oMEpC8yHDHF~M8y0cyDy0jV1viP6dkFAkQOf2hGD4d6beKu3diceV7Ws-H6cAf~2ixnENzwN7qBi4f9AT1awJc5r0PKG0aVkVteW5StdYH3xRPI9fOhv4nQ~y-Mw__"
            alt=""
          />
        </div>
        <div>
          <p className="text-[12px] text-white">Powered by</p>
          <img
            className="h-7"
            src="https://s3-alpha-sig.figma.com/img/c471/a920/9601df4dcd1e9953fd6ecb14ca04de8f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MXrcHhC-dDfrgpoFbMJkjuneggatkbBfwC~0-g9snnpLUESElk0eYpTzzHMVZb4PJX90~NUQuAenDw8CDGKAPpZ9Jzv7UifDHq3Z5LT3QlQ2hY-zDPUbBPZv44147rX7KxxhfPiyXH1sMjaMZGzageB17WX6F3sj~joGzYfE8e2ahNrIhgEyemtmL51Pw6vYna9WyZvurgavXBuaVVn8hkEkVcNfyIi9WVExsXNvlACA3GxPLgxFtBONRdq~zROjN41nDRT9Iu~oO6h2j5t0nBj~FlXsVedAjX4jw9znbDYv-acXVzu-o-cszQTr3N7c7H66d4dDPZe9LZBOOCrljA__"
            alt=""
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
