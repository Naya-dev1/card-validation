import { Request, Response } from "express";
import { luhnCheck } from "../services/luhn";

interface CardRequestBody {
  cardNumber: string;
}

export function validateCard(req: Request, res: Response): void {
  try {
    const { cardNumber } = req.body as CardRequestBody;

    if (!cardNumber) {
      res.status(400).json({
        success: false,
        message: "Card number is required",
      });
      return;
    }

    if (typeof cardNumber !== "string") {
      res.status(400).json({
        success: false,
        message: "Card number must be a string",
      });
      return;
    }

    const isValid = luhnCheck(cardNumber);

    res.status(200).json({
      success: true,
      cardNumber,
      isValid,
      message: isValid ? "Card number is valid" : "Card number is invalid",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong on the server",
    });
  }
}
