import cv.CvPageContentRu
import cv.getCvPage
import header.header
import index.IndexPageContentEn
import index.IndexPageContentRu
import index.getIndexPage
import kotlinx.html.HEAD

fun main() {
    val indexPage = getIndexPage(
        header = HEAD::header,
        IndexPageContentRu, IndexPageContentEn
    )

    val cvPage = getCvPage(
        header = HEAD::header,
        CvPageContentRu
    )
    println(cvPage)
}
