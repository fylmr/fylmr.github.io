import index.IndexPageContentEn
import index.IndexPageContentRu
import index.getIndexPage
import kotlinx.html.HEAD
import kotlinx.html.link
import kotlinx.html.meta

fun main() {

    val indexPage = getIndexPage(
        header = HEAD::header,
        IndexPageContentRu, IndexPageContentEn
    )
    println(indexPage)
}

fun HEAD.header() {
    meta(charset = "utf-8")
    meta(name = "viewport", content = "width=device-width, initial-scale=1, shrink-to-fit=no")

    link(rel = "stylesheet", href = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css") {
        integrity = "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    }

    link(href = "css/style.css", rel = "stylesheet")
}
