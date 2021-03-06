import React from 'react';
import Modal from '../../../componenti/UI/Modal'
import Input from '../../../componenti/UI/input';
import {Row, Col} from 'react-bootstrap';


const UpdateCategoriesModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        size,
        expandedArray,
        checkedArray,
        handleCategoryInput,
        categoryList,
        onSubmit
    } = props;

    console.log({expandedArray, checkedArray})

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            onSubmit={onSubmit}
            modalTitle={modalTitle}
            size={size}

        >
            <Row>
                <Col>
                    <h6>Expanded</h6>
                </Col>
            </Row>
            {
                expandedArray.length > 0 &&
                expandedArray.map((item, index) =>
                    <Row key={index}>
                        <Col>
                            <Input
                                value={item.nome}
                                placeholder={`Category Name`}
                                onChange={(e) => handleCategoryInput('nome', e.target.value, index, 'expanded')}
                            />
                        </Col>
                        <Col>
                            <select
                                className="form-control"
                                value={item.parentId}
                                onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}>
                                <option>select category</option>
                                {
                                    categoryList.map(option =>
                                        <option key={option.value} value={option.value}>{option.nome}</option>
                                    )
                                }
                            </select>
                        </Col>
                    </Row>
                )
            }
            <h6>Checked Categories</h6>
            {
                checkedArray.length > 0 &&
                checkedArray.map((item, index) =>
                    <Row key={index}>
                        <Col>
                            <Input
                                value={item.nome}
                                placeholder={`Category Name`}
                                onChange={(e) => handleCategoryInput('nome', e.target.value, index, 'checked')}
                            />
                        </Col>
                        <Col>
                            <select
                                className="form-control"
                                value={item.parentId}
                                onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}>
                                <option>select category</option>
                                {
                                    categoryList.map(option =>
                                        <option key={option.value} value={option.value}>{option.nome}</option>
                                    )
                                }
                            </select>
                        </Col>
                    </Row>
                )
            }
        </Modal>
    );
}

export default UpdateCategoriesModal;