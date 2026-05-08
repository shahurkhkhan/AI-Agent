"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envValidationSchema = void 0;
const Joi = require("joi");
exports.envValidationSchema = Joi.object({
    OPENAI_API_KEY: Joi.string().required(),
});
//# sourceMappingURL=env.validation.js.map