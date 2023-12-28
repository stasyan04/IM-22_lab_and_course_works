# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

```sql

    -- MySQL Workbench Forward Engineering
    
    SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
    SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
    SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
    
    -- -----------------------------------------------------
    -- Schema MyDB
    -- -----------------------------------------------------
    DROP SCHEMA IF EXISTS `MyDB` ;
    
    -- -----------------------------------------------------
    -- Schema MyDB
    -- -----------------------------------------------------
    CREATE SCHEMA IF NOT EXISTS `MyDB` ;
    USE `MyDB` ;
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`file`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`file` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`file` (
      `id` INT NOT NULL,
      `name` VARCHAR(255) NOT NULL,
      `description` VARCHAR(255) NULL,
      `uploadDate` DATETIME NOT NULL,
      `lastEditTime` DATETIME NOT NULL,
      `format` VARCHAR(45) NOT NULL,
      `hasVisualization` TINYINT(1) NOT NULL,
      `authorId` INT NOT NULL,
      `country` VARCHAR(45) NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`role`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`role` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`role` (
      `id` INT UNSIGNED NOT NULL,
      `name` VARCHAR(45) NOT NULL,
      `description` VARCHAR(255) NULL,
      PRIMARY KEY (`id`),
      FULLTEXT INDEX `idx_title_description` (`name`, `description`))
    ENGINE = InnoDB;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`user`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`user` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`user` (
      `id` INT NOT NULL,
      `nickname` VARCHAR(45) NOT NULL,
      `firstname` VARCHAR(45) NOT NULL,
      `lastname` VARCHAR(45) NULL,
      `email` VARCHAR(255) NOT NULL,
      `password` VARCHAR(255) NOT NULL,
      `role_id` INT UNSIGNED NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_user_role1_idx` (`role_id` ASC),
      CONSTRAINT `fk_user_role1`
        FOREIGN KEY (`role_id`)
        REFERENCES `MyDB`.`role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`request`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`request` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`request` (
      `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
      `target` VARCHAR(255) NOT NULL,
      `type` VARCHAR(45) NOT NULL,
      `date` DATETIME NOT NULL,
      `user_id` INT NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_request_user1_idx` (`user_id` ASC),
      CONSTRAINT `fk_request_user1`
        FOREIGN KEY (`user_id`)
        REFERENCES `MyDB`.`user` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`right`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`right` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`right` (
      `id` INT UNSIGNED NOT NULL,
      `name` VARCHAR(255) NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`filter`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`filter` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`filter` (
      `id` INT NOT NULL,
      `keyword` VARCHAR(255) NULL,
      `country` VARCHAR(45) NULL,
      `format` VARCHAR(45) NULL,
      `request_id` INT UNSIGNED NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_filter_request1_idx` (`request_id` ASC),
      CONSTRAINT `fk_filter_request1`
        FOREIGN KEY (`request_id`)
        REFERENCES `MyDB`.`request` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`search`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`search` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`search` (
      `request_id` INT UNSIGNED NOT NULL,
      `file_id` INT NOT NULL,
      PRIMARY KEY (`request_id`, `file_id`),
      INDEX `fk_search_file1_idx` (`file_id` ASC),
      CONSTRAINT `fk_search_request1`
        FOREIGN KEY (`request_id`)
        REFERENCES `MyDB`.`request` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_search_file1`
        FOREIGN KEY (`file_id`)
        REFERENCES `MyDB`.`file` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`permission`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`permission` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`permission` (
      `id` INT UNSIGNED NOT NULL,
      `name` VARCHAR(255) NOT NULL,
      `right_id` INT UNSIGNED NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_permission_right1_idx` (`right_id` ASC),
      CONSTRAINT `fk_permission_right1`
        FOREIGN KEY (`right_id`)
        REFERENCES `MyDB`.`right` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`grant`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`grant` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`grant` (
      `right_id` INT UNSIGNED NOT NULL,
      `role_id` INT UNSIGNED NOT NULL,
      PRIMARY KEY (`right_id`, `role_id`),
      INDEX `fk_grant_role1_idx` (`role_id` ASC),
      CONSTRAINT `fk_grant_right1`
        FOREIGN KEY (`right_id`)
        REFERENCES `MyDB`.`right` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_grant_role1`
        FOREIGN KEY (`role_id`)
        REFERENCES `MyDB`.`role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    -- -----------------------------------------------------
    -- Table `MyDB`.`access`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `MyDB`.`access` ;
    
    CREATE TABLE IF NOT EXISTS `MyDB`.`access` (
      `role_id` INT UNSIGNED NOT NULL,
      `file_id` INT NOT NULL,
      PRIMARY KEY (`role_id`, `file_id`),
      INDEX `fk_access_file1_idx` (`file_id` ASC),
      CONSTRAINT `fk_access_role1`
        FOREIGN KEY (`role_id`)
        REFERENCES `MyDB`.`role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_access_file1`
        FOREIGN KEY (`file_id`)
        REFERENCES `MyDB`.`file` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8;
    
    
    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


```

## RESTfull сервіс для управління даними(Python, FastAPI, sqlalchemy)
RESTfull сервіс створено на мові програмування Pyhon, використовуючи модули FastAPI та sqlalchemy.
Даний сервіс створено за моделю MVC (Model-View-Controller), з його допомогою розробник може легко взаємодіяти
з базою даних, уникаючи використання SQL-скриптів самотужки.

## Діаграма класів
<p>
    <img src="./resources/Diagram.png">
</p>

### Середовище

#### Database
```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import os

def get_database_url():
    username = os.getenv('DB_USERNAME', 'root')
    password = os.getenv('DB_PASSWORD', 'stas04')
    host = os.getenv('DB_HOST', 'localhost')
    db_name = os.getenv('DB_NAME', 'mydb')
    return f'mysql+pymysql://{username}:{password}@{host}:3306/{db_name}'

def create_db_engine():
    return create_engine(get_database_url())

def get_session_local(engine):
    return sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_base():
    return declarative_base()

engine = create_db_engine()
SessionLocal = get_session_local(engine)
Base = get_base()

```

#### Dependencies
```python
from fastapi import Depends
from Environment.database import SessionLocal
from typing import Annotated, Generator
from sqlalchemy.orm import Session

def get_db() -> Generator[Session, None, None]:


    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()
def create_session_dependency() -> Annotated[Session, Depends]:
return Annotated[Session, Depends(get_db)]

dependency = create_session_dependency()
```

### Моделі

#### models
```python
from Environment.database import Base
from pydantic import BaseModel, Field
from sqlalchemy import Column, Integer, String, DateTime, Boolean, func
import datetime
from typing import Optional
from uuid import UUID, uuid4



class File(Base):
    __tablename__ = 'file'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(255))
    description = Column(String(255), nullable=True)
    uploadDate = Column(DateTime, default=func.now())
    lastEditTime = Column(DateTime, default=func.now())
    format = Column(String(45))
    hasVisualization = Column(Boolean)
    authorId = Column(Integer)
    country = Column(String(45))


class FileBase(BaseModel):
    name: str
    description: str
    lastEditTime: datetime.datetime
    format: str
    hasVisualization: bool
    authorId: int
    country: str


class FileWithIDAndDate(FileBase):
    id: int
    uploadDate: datetime.datetime

    class Config:
        orm_mode = True



class Request(Base):
    __tablename__ = 'request'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    target = Column(String(255))
    type = Column(String(45))
    date = Column(DateTime, default=func.now())
    user_id = Column(Integer)


class RequestBase(BaseModel):
    target: str
    type: str
    user_id: int


class RequestWithIDAndDate(RequestBase):
    id: int
    date: datetime.datetime

    class Config:
        orm_mode = True



class Role(Base):
    __tablename__ = 'role'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(45))
    description = Column(String(255), nullable=True)


class RoleBase(BaseModel):
    name: str
    description: Optional[str] = None


class RoleWithID(RoleBase):
    id: int

    class Config:
        orm_mode = True



class Search(Base):
    __tablename__ = 'search'
    request_id = Column(Integer, primary_key=True, index=True, nullable=False)
    file_id = Column(Integer, nullable=False)


class SearchBase(BaseModel):
    request_id: int
    file_id: int




class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nickname = Column(String(45))
    firstname = Column(String(45))
    lastname = Column(String(45))
    email = Column(String(255))
    password = Column(String(255))
    role_id = Column(Integer)


class UserBase(BaseModel):
    nickname: str
    firstname: str
    lastname: str
    email: str
    password: str
    role_id: int


class UserWithID(UserBase):
    id: int

    class Config:
        orm_mode = True
```

### Контролери

#### routes
```python
from fastapi import APIRouter, HTTPException, status
from typing import List
from Models.models import File, FileBase, Request, RequestBase, Role, RoleBase, Search, SearchBase, User, UserBase, UserWithID, FileWithIDAndDate, RequestWithIDAndDate, RoleWithID
from Environment.dependencies import dependency



file_router = APIRouter()

@file_router.post("", status_code=status.HTTP_201_CREATED, response_model=FileBase)
async def create_file(file: FileBase, db: dependency):
    db_file = File(**file.dict())
    db.add(db_file)
    db.commit()
    db.refresh(db_file)
    return db_file

@file_router.put("{file_id}", status_code=status.HTTP_200_OK, response_model=FileBase)
async def update_file(file_id: int, file: FileBase, db: dependency):
    db_file = db.query(File).filter(File.id == file_id).first()
    if db_file is None:
        raise HTTPException(status_code=404, detail="File not found")
    for var, value in vars(file).items():
        if value is not None:
            setattr(db_file, var, value)
    db.commit()
    db.refresh(db_file)
    return db_file

@file_router.get("", status_code=status.HTTP_200_OK, response_model=List[FileWithIDAndDate])
async def read_all_files(db: dependency):
    files = db.query(File).all()
    if not files:
        raise HTTPException(status_code=404, detail="No files found")
    return files

@file_router.get("{file_id}", status_code=status.HTTP_200_OK, response_model=FileWithIDAndDate)
async def read_file(file_id: int, db: dependency):
    file = db.query(File).filter(File.id == file_id).first()
    if file is None:
        raise HTTPException(status_code=404, detail="File not found")
    return file

@file_router.delete("{file_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_file(file_id: int, db: dependency):
    file = db.query(File).filter(File.id == file_id).first()
    if file is None:
        raise HTTPException(status_code=404, detail="File not found")
    db.delete(file)
    db.commit()
    return None




request_router = APIRouter()

@request_router.post("", status_code=status.HTTP_201_CREATED, response_model=RequestBase)
async def create_request(request: RequestBase, db: dependency):
    db_request = Request(**request.dict())
    user_id = request.user_id
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request

@request_router.get("", status_code=status.HTTP_200_OK, response_model=List[RequestWithIDAndDate])
async def read_all_requests(db: dependency):
    requests = db.query(Request).all()
    if not requests:
        raise HTTPException(status_code=404, detail="No requests found")
    return requests

@request_router.get("{request_id}", status_code=status.HTTP_200_OK, response_model=RequestWithIDAndDate)
async def read_request(request_id: int, db: dependency):
    request = db.query(Request).filter(Request.id == request_id).first()
    if request is None:
        raise HTTPException(status_code=404, detail="Request not found")
    return request

@request_router.delete("{request_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_request(request_id: int, db: dependency):
    request = db.query(Request).filter(Request.id == request_id).first()
    if request is None:
        raise HTTPException(status_code=404, detail="Request not found")
    db.delete(request)
    db.commit()
    return None




role_router = APIRouter()

@role_router.post("", status_code=status.HTTP_201_CREATED, response_model=RoleBase)
async def create_role(role: RoleBase, db: dependency):
    db_role = Role(**role.dict())
    db.add(db_role)
    db.commit()
    db.refresh(db_role)
    return db_role

@role_router.put("{role_id}", status_code=status.HTTP_200_OK, response_model=RoleBase)
async def update_role(role_id: int, role: RoleBase, db: dependency):
    db_role = db.query(Role).filter(Role.id == role_id).first()
    if db_role is None:
        raise HTTPException(status_code=404, detail="Role not found")
    for var, value in vars(role).items():
        if value:
            setattr(db_role, var, value)
    db.add(db_role)
    db.commit()
    db.refresh(db_role)
    return db_role

@role_router.get("", status_code=status.HTTP_200_OK, response_model=List[RoleWithID])
async def read_all_roles(db: dependency):
    roles = db.query(Role).all()
    if not roles:
        raise HTTPException(status_code=404, detail="No roles found")
    return roles

@role_router.get("{role_id}", status_code=status.HTTP_200_OK, response_model=RoleWithID)
async def read_role(role_id: int, db: dependency):
    role = db.query(Role).filter(Role.id == role_id).first()
    if role is None:
        raise HTTPException(status_code=404, detail="Role not found")
    return role

@role_router.delete("{role_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_role(role_id: int, db: dependency):
    role = db.query(Role).filter(Role.id == role_id).first()
    if role is None:
        raise HTTPException(status_code=404, detail="Role not found")
    db.delete(role)
    db.commit()
    return None




search_router = APIRouter()

@search_router.post("", status_code=status.HTTP_201_CREATED, response_model=SearchBase)
async def create_search(search: SearchBase, db: dependency):
    db_search = Search(**search.dict())
    request_id = search.request_id
    request = db.query(Request).filter(Request.id == request_id).first()
    if request is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Request not found")
    file_id = search.file_id
    file = db.query(File).filter(File.id == file_id).first()
    if file is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="File not found")
    db.add(db_search)
    db.commit()
    db.refresh(db_search)
    return db_search

@search_router.get("", status_code=status.HTTP_200_OK, response_model=List[SearchBase])
async def read_all_searches(db: dependency):
    searches = db.query(Search).all()
    if not searches:
        raise HTTPException(status_code=404, detail="No searches found")
    return searches

@search_router.get("{request_id}", status_code=status.HTTP_200_OK, response_model=SearchBase)
async def read_search(request_id: int, db: dependency):
    search = db.query(Search).filter(Search.request_id == request_id).first()
    if search is None:
        raise HTTPException(status_code=404, detail="Search not found")
    return search

@search_router.delete("{search_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_search(request_id: int, db: dependency):
    search = db.query(Search).filter(Search.request_id == request_id).first()
    if search is None:
        raise HTTPException(status_code=404, detail="Search not found")
    db.delete(search)
    db.commit()
    return None




user_router = APIRouter()

@user_router.post("", status_code=status.HTTP_201_CREATED, response_model=UserBase)
async def create_user(user: UserBase, db: dependency):
    db_user = User(**user.dict())
    role_id = user.role_id
    role = db.query(Role).filter(Role.id == role_id).first()
    if role is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role not found")
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@user_router.put("{user_id}", status_code=status.HTTP_200_OK, response_model=UserBase)
async def update_user(user_id: int, user: UserBase, db: dependency):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    for var, value in vars(user).items():
        if value:
            setattr(db_user, var, value)
    role_id = user.role_id
    role = db.query(Role).filter(Role.id == role_id).first()
    if role is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role not found")
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@user_router.get("", status_code=status.HTTP_200_OK, response_model=List[UserWithID])
async def read_all_users(db: dependency):
    users = db.query(User).all()
    if not users:
        raise HTTPException(status_code=404, detail="No users found")
    return users

@user_router.get("{user_id}", status_code=status.HTTP_200_OK, response_model=UserWithID)
async def read_user(user_id: int, db: dependency):
    user = db.query(User).filter(User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@user_router.delete("{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, db: dependency):
    user = db.query(User).filter(User.id == user_id).first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()

    return None  
```

### Файл запуску програми 
#### main
```python
from fastapi import FastAPI
from Routes.routes import user_router, role_router, search_router, request_router, file_router

app = FastAPI(title="6_Lab_API", description='Bla description')

app.include_router(user_router, tags=["users"], prefix="/users")

app.include_router(role_router, tags=["roles"], prefix="/roles")

app.include_router(request_router, tags=["requests"], prefix="/requests")

app.include_router(file_router, tags=["files"], prefix="/files")

app.include_router(search_router, tags=["search"], prefix="/search")
```
