import { title } from "process";
import { sequelize } from "../../db_connection";
import { Loan } from "./loan";
import { DataTypes } from "sequelize";

const loansData = [
  {
    id: 1,
    book_id:2,
    member_id: 2,
    loan_date: new Date(),
    due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
  },
  {
    id: 2,
    book_id:1,
    member_id: 3,
    loan_date: new Date(),
    due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
  },
  {
    id: 3,
    book_id:4,
    member_id: 4,
    loan_date: new Date(),
    due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
  },
  {
    id: 4,
    book_id:3,
    member_id: 5,
    loan_date: new Date(),
    due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
  },
  {
    id: 5,
    book_id:5,
    member_id: 1,
    loan_date: new Date(),
    due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
  },
];

export const insertLoansData = async () => {
  const loans = await Loan.bulkCreate(loansData);
};