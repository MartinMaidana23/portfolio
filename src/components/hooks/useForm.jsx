import {useState} from 'react'
import emailjs from '@emailjs/browser'


const useForm = (initialForm) => {

    
    const [form, setForm] = useState(initialForm)
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)

    const handleChange = (e) =>{
        const {name, value} = e.target 
        setForm({
          ...form,
          [name]: value,
      })

    }
    const handleSubmit = async (e)=>{
        e.preventDefault()

        setLoading(true)

        try {
            await emailjs.sendForm('service_53roezu', "template_kanjjhc", e.target, 'V4CCjQKc_D0_yLP7-')
            .then((result) => {

                if (result.status === 200) {
                    setLoading(false)
                    setModal(true)
                } else {
                    setLoading(false)
                    alert('Something went wrong, please try again.')
                }
            })
        setForm({
        initialForm
        })
        setTimeout(() => {
            e.target.reset()
            setModal(false)

        }, 2000);
        } catch (error) {
            console.log(error);
        }
    }
    
    

  return {
    form,
    handleChange,
    handleSubmit,
    loading,
    modal
  }
}

export default useForm