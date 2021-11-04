import express from 'express'
// import { FUNCTIONS } from './users.controller.js'

export const userRouter = express.Router();
const contentRouter = express.Router({mergeParams: true});
const calendarRouter = express.Router({mergeParams: true});

// middleware specific to this route
userRouter.use(express.json())
userRouter.use('/:userName/contentschedule', contentRouter);
userRouter.use('/:userName/calendar', contentRouter);

import * as fs from "fs/promises";

const DATA_FILE = "./data.json"

