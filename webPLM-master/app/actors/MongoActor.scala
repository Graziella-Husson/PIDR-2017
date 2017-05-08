package actors
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.api.collections.bson.BSONCollection
import scala.concurrent.ExecutionContext.Implicits.global
import play.api.Logger
import play.api.libs.iteratee
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
  var collection = db.collection("codeToDescription")

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

def getAllAdmin(): Future[JsArray] = {
  type ResultType = JsObject // any type which is provided a `Writes[T]
  val firstDB = collection
  collection = db.collection("codeAndCommentsFinal")
  var result=collection.find(Json.obj()).cursor[ResultType](ReadPreference.primary).jsArray()
  collection = firstDB
  result
}

//TODO CC
def updateDBComment(code : String, commentaire : String, exerciseName : String){
	val firstDB = collection
	collection = db.collection("codeAndCommentsFinal")

	val query = BSONDocument("code" -> code, "exercice" -> exerciseName)

val cursor: Cursor[JsObject] = collection.find(Json.obj("code" -> code, "exercice" -> exerciseName)).cursor[JsObject]
    var oldComm = ""
    var realoldComm = ""
    var futureList: Future[List[JsObject]] = cursor.collect[List]()
    futureList.map { result =>
	var commObject : JsObject = result.lift(0) match {
		case None => JsObject(Seq.empty)
		case Some(s: JsObject) => s 
       }
	  oldComm = commObject.value("commentaire").toString 
    }	
		Thread.sleep(1000)
      realoldComm = oldComm slice (1, oldComm.length()-1)
    var newComm : String = realoldComm+"|NEWCOMM|"+commentaire
   	Logger.info(newComm)
	var selector = BSONDocument("code" -> code, "exercice" -> exerciseName)
	var modifier = BSONDocument(
  		"$set" -> BSONDocument(
    		"code" -> code,
    		"commentaire" -> newComm,
    		"exercice" -> exerciseName))

	var futureUpdate1 = collection.update(selector, modifier,multi=false, upsert=true)  
	
	  
	collection = firstDB
}


}
