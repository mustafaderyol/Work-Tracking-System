const express = require('express');
const router = express.Router();

const Work = require('../models/Work');

router.get('/:limit/:skip', (req, res) => {
    const promise = Work.find(
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

router.get('/:id', (req, res) => {
    const promise = Work.findById(req.params.id);
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
    const promise = Work.findByIdAndUpdate(req.params.id, req.body, {new: true});
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
    const promise = Work.findByIdAndRemove(req.params.id);
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
    const user = new Work(req.body);
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