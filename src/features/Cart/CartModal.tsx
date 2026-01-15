import Modal from 'react-modal'
import { Cart } from './Cart'
import { useState } from 'react'
import { Button } from '../../components'

export const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  return (
    <>
      <Button onClick={openCart}>Cart</Button>
      <Modal isOpen={isOpen} onRequestClose={closeCart} contentLabel="Cart">
        <Cart />
      </Modal>
    </>
  )
}
