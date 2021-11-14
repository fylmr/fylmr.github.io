package lang

sealed interface Language {
    val languageCode: String
}

object RussianLanguage : Language {
    override val languageCode = "ru"
}

object EnglishLanguage : Language {
    override val languageCode = "en"
}
