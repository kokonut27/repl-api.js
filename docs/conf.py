# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys

sys.path.insert(0, os.path.abspath(".."))


# -- Project information -----------------------------------------------------

project = "repl-api.js"
copyright = "2022, kokonut"
author = "kokonut"

# The full version, including alpha/beta/rc tags
release = "0.0.1"


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.autosectionlabel",
    "sphinx.ext.extlinks",
    "sphinx.ext.intersphinx",
    "sphinx.ext.napoleon",
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

# -- Type Hinting Stuff =p ---------------------------------------------------

autodoc_typehints_format = "short"

autodoc_preserve_defaults = True


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "sphinx_material"

html_title = "Repl-api.js"

html_logo = "images/icon.png"

html_static_path = ["_static"]

html_sidebars = {
    "**": ["logo-text.html", "globaltoc.html", "localtoc.html", "searchbox.html"]
}

html_theme_options = {
    # -- Meta settings -------------------
    "nav_title": "Repl-api.js",
    
    # -- Styling settings ----------------
    "color_primary": "blue",
    "color_accent": "sky-blue",
    
    # -- Repository settings -------------
    "repo_type": "github",
    "repo_url": "https://github.com/kokonut27/repl-api.js",
    "repo_name": "repl-api.js",

    # -- TOC tree settings ---------------
    "globaltoc_depth": 2,
    "globaltoc_collapse": False,
    "globaltoc_includehidden": True,
    
    # --- Misc/HTML settings -------------
    "heroes": {
        "index": "A Fast and Efficient API for Replit that's written in NodeJS.",
        "pages/api": "Everything you need to know about the API.",
        "pages/examples": "Quickstart examples to get you going.",
        "pages/guides": "In-depth explorations of the library and its features."
    },
    "nav_links": [
        {
            "href": "https://github.com/kokonut27/repl-api.js/issues",
            "title": "Issues",
            "internal": False,
        },
        {
            "href": "BLANK",
            "title": "Discord Server",
            "internal": False,
        },
    ],
}

resource_links = {
    "discord": "BLANK",
    "issues": "https://github.com/kokonut27/repl-api.js/issues",
}


# This is a function linkcode_resolve(domain, info), which should return the
# URL to source code corresponding to the object in given domain with given
# information. The function should return None if no link is to be added.

intersphinx_mapping = {
    "py": ("https://docs.python.org/3", None),
}


def setup(app):
    if app.config.language == "ja":
        app.config.intersphinx_mapping["py"] = ("https://docs.python.org/ja/3", None)
