package index

import lang.EnglishLanguage
import lang.Language
import lang.RussianLanguage

sealed class IndexPageContents(language: Language) {
    abstract val name: String

    abstract val jobTitle: String

    abstract val cvTitle: String

    val cvLink: String = "cv-${language.languageCode}.html"
}

object IndexPageContentRu : IndexPageContents(RussianLanguage) {
    override val name = "Филипп Максимов"
    override val jobTitle = "Android-разработчик"
    override val cvTitle: String = "Резюме на русском"
}

object IndexPageContentEn : IndexPageContents(EnglishLanguage) {
    override val name = "Filipp Maksimov"
    override val jobTitle = "Android developer"
    override val cvTitle: String = "My CV in English"
}
