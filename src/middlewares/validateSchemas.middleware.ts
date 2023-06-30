import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export default function validateSchema(schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send(validation.error.details.map((d) => d.message));
    }
    next();
  };
}
