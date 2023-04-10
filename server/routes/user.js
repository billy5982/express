const express = require('express');
const models = require('../models');
const controller = require('../controller');
const router = express.Router();

// 유저 정보 조회
router.get('/', controller.userInfo);

// 유저가 했던 질문 전체 조회
router.get('/questions', controller.getQuestion);

// 유저가 수정하기 위해 디테일에 접근하기
router.get('/question/:id', controller.questionDetail);

// 유저가 질문+답변 등록하기
router.post('/editQuestion', controller.editQuestion);

module.exports = router;
