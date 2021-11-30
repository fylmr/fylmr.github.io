package index

import kotlinx.html.FlowContent
import kotlinx.html.HEAD
import kotlinx.html.a
import kotlinx.html.body
import kotlinx.html.div
import kotlinx.html.h4
import kotlinx.html.head
import kotlinx.html.html
import kotlinx.html.p
import kotlinx.html.stream.createHTML
import kotlinx.html.title

fun getIndexPage(
    header: HEAD.() -> Unit,
    vararg contents: IndexPageContents
) = createHTML().html {
    head {
        header()

        title("Filipp Maksimov — Android developer")
    }

    body(classes = "mb-2") {
        contents.forEach { it.renderContent(this) }
    }
}

fun IndexPageContents.renderContent(flowContent: FlowContent) = flowContent.apply {
    div("main") {
        h4 { +name }
        p { +jobTitle }
        p("mt-2") {
            a(cvLink) { +cvTitle }
        }
    }
}
