from typing import Union, Annotated

from fastapi import FastAPI, File, Form, UploadFile

from fastapi.staticfiles import StaticFiles

app = FastAPI () #to run use fastapi dev server.py (dev mode) or fastapi run (production mode) server.py

@app.form("/files/")
async def createFiles(
  file : Annotated[bytes, File()],
  fileb : Annotated [UploadFile, File()],
  token : Annotated [str, Form()],):
    return {
       "filesize" : len(file),
       "token" : token,
       "fileb_content_type" : fileb.content_type,
    }

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
  return {"item_id" : item_id , "q" : q}