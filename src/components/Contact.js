import React from 'react'
import {useForm} from "react-hook-form"
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onsubmit=(data)=>{
    console.log(data)
  }
  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <div>
            <h4>Get in touch</h4>
          </div>
          <hr/>
            <form class="row g-3 "  onSubmit={handleSubmit(onsubmit)}>
             
              <div className="form-group  mb-3">
                <label for="Name" className="form-label">Name</label>
                <input type="text" className="form-control" {...register("username",{required:{value:true,message:"required field"},minLength:{value:3,message:"length of name should be grater the 3"},
                maxLength:{value:8,message:"length of name should not be grater the 8"}})} placeholder="Enter Your Name" />
                {errors.username && <span style={{color:"red"}}>{errors.username.message}</span>}
              </div>

              <div className="form-group  mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" {...register("email",{required:{value:true,message:"requird field"}})}  placeholder="Enter Your Email"/>
              </div>

              <div className="form-group  mb-3">
                <label for="phone" className="form-label">Date of birth</label>
                <input type="date" className="form-control" {...register("dob",{required:{value:true,message:"requird field"}})}   />
              </div>
              <div className="form-group  mb-3">
                <label for="text" className="form-label">Address</label>
                <input type="text" className="form-control" {...register("Address",{required:{value:true,message:"requird field"}})}   />
              </div>

              <div className="form-group  mb-3">
                <label for="desc" className="form-label" placeholder="create amessage here...">Bio</label>
                <textarea className="form-control" id="desc" rows="3" name="desc"></textarea>
              </div>
              <div className="form-group  mb-3">
                <label for="file" className="form-label">Uplod your Image</label>
                <input type="file" className="form-control" {...register("image",{required:{value:true,message:"requird field"}})}  />
              </div>
              <div className="form-group  mb-3">
                <label for="file" className="form-label">Uplode your Profile</label>
                <input type="file" className="form-control" {...register("profile",{required:{value:true,message:"requird field"}})}  placeholder="Enter Your Address" />
              </div>
              
              <button className="btn btn-primary my-3" type="submit">submit</button>
            </form>
        </div>
        <div className='col-3'></div>

      </div>

    </div>
  )
}

export default Contact