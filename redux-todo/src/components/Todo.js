import React, { useState } from "react";
import { Card, CardHeader, CardContent, Button, Box, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, removeTodo } from "../actions/index"

const Todo = () => {

  const [inputData, setInputData] = useState('')
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  console.log(list);
  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          align: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          className="main"
          sx={{
            bgcolor: "#f3e5f5",
            alignItems: "center",
            width: 500,
            height: "80vh",
            overflowY: "scroll",
          }}
        >
          <Box
            sx={{
              display: "block",
              bgcolor: "#18ffff",
              position: "sticky",
              top: 0,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                align: "center",
                justifyContent: "center",
              }}
            >
              <figcaption>Add Your List</figcaption>
            </CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                varient: "outline",
                align: "center",
              }}
            >
              <input
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",

                  align: "center",
                  justifyContent: "center",
                }}
                type="text"
                placeholder="Add Items....."
                value={inputData}
                onChange={(event) => setInputData(event.target.value)}
              />
              <Button
                sx={{ backgroundColor: "#fff" }}
                color="primary"
                varient="outline"
                aria-label="add"
                onClick={() => dispatch(addTodo(inputData), setInputData(""))}
              >
                <AddIcon />
              </Button>
            </div>
          </Box>
          <div>
            {list.map((elem) => {
              return (
                <Card key={elem.id} sx={{ bgcolor: "#fff", mt: 2 }}>
                  <Typography
                    sx={{
                      display: "flex",
                      align: "center",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      bgcolour: "#fff",
                      ml: 4,
                    }}
                  >
                    <h3>{elem.data}</h3>
                    <div>
                      <Button
                        sx={{
                          backgroundColor: "#fff",
                          justifyContent: "flex-end",
                        }}
                        color="primary"
                        size="small"
                        onClick={() => dispatch(deleteTodo(elem.id))}
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </Typography>
                </Card>
              );
            })}
          </div>
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => dispatch(removeTodo())}
              sx={{ backgroundColor: "#fff", mt: 4 }}>REMOVE ALL</Button>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};

export default Todo;
