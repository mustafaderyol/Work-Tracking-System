const express = require('express');
const router = express.Router();

const UserWorkPivot = require('../models/UserWorkPivot');

router.get('/:limit/:skip', (req, res) => {
    const promise = UserWorkPivot.find(
        {},
        {},
        {
            limit: parseInt(req.params.limit),
            skip: parseInt(req.params.skip)
        });
    promise.then((data) => {
        res.json({
            data: data,
            status: 1
        });
    }).catch((err) => {
        res.json({
            data: err,
            status: 0
        });
    });
});

router.get('/:userId/:limit/:skip', (req, res) => {
    const promise = UserWorkPivot.find(
        {
            userId: req.params.userId
        },
        {},
        {
            limit: parseInt(req.params.limit),
            skip: parseInt(req.params.skip)
        });
    promise.then((data) => {
        res.json({
            data: data,
            status: 1
        });
    }).catch((err) => {
        res.json({
            data: err,
            status: 0
        });
    });
});

router.get('/:workId/:limit/:skip', (req, res) => {
    const promise = UserWorkPivot.find(
        {
            workId: req.params.workId
        },
        {},
        {
            limit: parseInt(req.params.limit),
            skip: parseInt(req.params.skip)
        });
    promise.then((data) => {
        res.json({
            data: data,
            status: 1
        });
    }).catch((err) => {
        res.json({
            data: err,
            status: 0
        });
    });
});

router.get('/:id', (req, res) => {
    const promise = UserWorkPivot.findById(req.params.id);
    promise.then((data) => {
        res.json({
            data: Array(data),
            status: 1
        });
    }).catch((err) => {
        res.json({
            data: err,
            status: 0
        });
    });
});

router.put('/:id', (req, res, next) => {
    const promise = UserWorkPivot.findByIdAndUpdate(req.params.id, req.body, {new: true});
    promise.then((data) => {
        if (!data) {
            next({
                data: "Data not found",
                status: 0
            });
        }
        res.json({
            data: Array(data),
            status: 1
        });
    }).catch((err) => {
        res.json({
            data: err,
            status: 0
        });
    });
});

router.delete('/:id', (req, res, next) => {
    const promise = UserWorkPivot.findByIdAndRemove(req.params.id);
    promise.then((data) => {
        if (!data) {
            next({
                data: "Data not found",
                status: 0
            });
        }
        res.json({
            data: Array(data),
            status: 1
        });
    }).catch((err) => {
        res.json({
            data: err,
            status: 0
        });
    });
});

router.post('/', (req, res, next) => {
    const user = new UserWorkPivot(req.body);
    const promise = user.save();
    promise.then((data) => {
        res.json({
            data: data,
            status: 1
        });
    }).catch((err) => {
        res.json({
            data: err,
            status: 0
        });
    });
});

module.exports = router;