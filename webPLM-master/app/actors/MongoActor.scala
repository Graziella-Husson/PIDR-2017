package actors
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.api.collections.bson.BSONCollection
import scala.concurrent.ExecutionContext.Implicits.global
import play.api.Logger
import scala.concurrent._
//import play.modules.reactivemongo.json.BSONFormats.BSONDocumentFormat
//import reactivemongo.play.json.BSONFormats.BSONDocumentFormat
//import reactivemongo.play._
//import play.modules._

import scala.concurrent.Future
import play.api.libs.json._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import reactivemongo.api.ReadPreference
import reactivemongo.play.json._
import reactivemongo.play.json.collection.{
  JSONCollection, JsCursor
}, JsCursor._


class MongoActor (){

  val driver = new MongoDriver
  val connection = driver.connection(List("localhost"))
  val db = connection.db("dbPLMDescription")
  val collection = db.collection("codeToDescription")

  def insert(description: String, code: String, exerciseName: String){
    val document = BSONDocument(
    "description" -> description,
    "code" -> code,
    "exerciseName" -> exerciseName)

    val future = collection.insert(document)
  }

def getAll(): Future[JsArray] = {
  type ResultType = JsObject // any type which is provided a `Writes[T]`
  collection.find(Json.obj()).cursor[ResultType](ReadPreference.primary).jsArray()
}
}
