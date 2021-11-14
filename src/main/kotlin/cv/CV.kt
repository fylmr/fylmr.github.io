package cv

import kotlinx.html.DIV
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

interface Contents {

    val title: String

    val name: String
    val jobTitle: String
    val ageString: String
    val location: String

    val contacts: DIV.() -> Unit
}

fun getCvPage(
    header: HEAD.() -> Unit,
    contents: Contents,
) = createHTML().html {
    head {
        header()

        title(contents.title)
    }

    body(classes = "mb-5") {
        div("main") {

            div("row") {
                h4("col-12") {
                    a("https://fylmr.github.io") { +contents.name }
                }
                p("col-12") { +contents.jobTitle }
                p("col-12") {
                    +contents.ageString
                    +", "
                    +contents.location
                }
            }

            div("row mt-2") {
                contents.contacts(this)
            }
        }
    }
}
