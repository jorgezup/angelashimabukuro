import { ContainerModal, ModalOverlay, WrapperModal, HeaderModal, Title } from '../styles/components/Modal'

import { MarkdownPreview } from 'react-marked-markdown'

import { FiX } from 'react-icons/fi'


export default function Modal({ data, show, onHide }) {
  return show ? (
    <ContainerModal>
      <ModalOverlay>
        <WrapperModal>
          <HeaderModal>
            <FiX onClick={onHide} />
            <Title>
              <h3>{data.title}</h3>
            </Title>
          </HeaderModal>
          <MarkdownPreview className="content" value={data.description} />
        </WrapperModal>
      </ModalOverlay>
    </ContainerModal>
  ) : null
}