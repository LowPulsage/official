import { Button, Form, Input } from 'antd'
import React from 'react'
import './contact-page.scss'

const ContactPage = () => {
  return (
    <div className="Contact-page">
      <div className="Contact-page__img">
        CONTACT
      </div>
      <div className="Contact-page__wrapper">
        <div className="Contact-page__info">
          <div>Info</div>
          <div>
            <span>Victory street</span>
            <span>Zhytomyr</span>
            <span>10000</span>
            <span>Ukraine</span>
            <span>-</span>
          </div>
          <div>
            <span>+38(099)312-34-24</span>
            <span>itchance@gmail.com</span>
          </div>
        </div>
        <div className="Contact-page__form">
          <span>Send message</span>
          <Form>
            <label>
              Name
              <Input placeholder="Basic usage" />
            </label>
            <label>
              Email
              <Input placeholder="Basic usage" />
            </label>
            <label>
              Message
              <Input.TextArea placeholder="Basic usage" />
            </label>
            <Button>Send</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
