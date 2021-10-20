# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "club-website-template"
  spec.version       = "0.1.0"
  spec.authors       = ["James471"]
  spec.email         = ["56861963+James471@users.noreply.github.com"]

  spec.summary       = "A template for club websites of IISERM"
  spec.homepage      = "https://github.com/James471/club-website-template"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
