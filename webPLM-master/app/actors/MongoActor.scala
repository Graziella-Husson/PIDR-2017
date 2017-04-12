package actors
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.api.collections.bson.BSONCollection
import scala.concurrent.ExecutionContext.Implicits.global
import play.api.Logger

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

}
