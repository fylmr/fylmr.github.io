package cv

import kotlinx.html.FlowOrPhrasingContent
import kotlinx.html.HEAD
import kotlinx.html.HTMLTag
import kotlinx.html.HtmlBlockInlineTag
import kotlinx.html.HtmlTagMarker
import kotlinx.html.TagConsumer
import kotlinx.html.a
import kotlinx.html.attributesMapOf
import kotlinx.html.body
import kotlinx.html.div
import kotlinx.html.h4
import kotlinx.html.head
import kotlinx.html.html
import kotlinx.html.li
import kotlinx.html.p
import kotlinx.html.stream.createHTML
import kotlinx.html.title
import kotlinx.html.ul
import kotlinx.html.visit

interface CvContents {

    val title: String

    val name: String
    val jobTitle: String
    val ageString: String
    val location: String

    val skype: String get() = "filaktet"
    val email: String get() = "phmaksimov@gmail.com"
    val telegramLink: String get() = "https://t.me/phhmaa"
    val telegram: String get() = "@phhmaa"

    val iKnow: String
}

fun getCvPage(
    header: HEAD.() -> Unit,
    contents: CvContents,
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
                p("col-12") {
                    +"E-mail: "
                    a(classes = "text-body", href = "mailto:${contents.email}") {
                        u { +contents.email }
                    }
                }
                p("col-12") {
                    +"Telegram: "
                    a(classes = "text-body", href = contents.telegramLink) {
                        u { +contents.telegram }
                    }
                }
                p("col-12") {
                    +"Skype: "
                    +contents.skype
                }
            }

            // Умею
            div("row mt-4") {
                p("lead col-12 font-weight-bold") { +contents.iKnow }
            }

            div("row mt-2") {
                div("col-12") {
                    ul {
                        li {
                            +"Разрабатывать приложения под Android на Kotlin и Java"
                            ul {
                                li { +"Использую Retrofit и OkHttp для работы с сетью" }
                                li { +"Асинхронные задачи делаю на Kotlin Coroutines или RxJava" }
                                li { +"Для Dependency Injection пользуюсь Dagger или Koin" }
                                li { +"Применяю MVP (Moxy) и MVVM" }
                                li { +"Пишу юнит-тесты с Mockito, Robolectric и Espresso" }
                                li { +"Есть опыт выкладывания приложений в Google Play" }
                            }
                        }
                        li { +"Пользоваться Git" }
                        li { +"Использовать Jira, Redmine, Confluence" }
                    }
                }
            }

            // Опыт работы

        }
    }
}

/**
 * Underline text style
 */
@HtmlTagMarker
inline fun FlowOrPhrasingContent.u(classes: String? = null, crossinline block: U.() -> Unit = {}): Unit = U(
    attributesMapOf("class", classes), consumer
).visit(block)

open class U(initialAttributes: Map<String, String>, override val consumer: TagConsumer<*>) :
    HTMLTag("u", consumer, initialAttributes, null, true, false),
    HtmlBlockInlineTag
