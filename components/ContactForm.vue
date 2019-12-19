<template>
  <form name="contact" method="POST" data-netlify="true">
    <!-- Name -->
    <div class="field">
      <label class="label is-medium">Nom</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          type="text"
          name="name"
          placeholder="Nom Prenom"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          type="email"
          name="email"
          placeholder="exemple@email.com"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" />
        </span>
      </div>
    </div>
    <!-- Subject -->
    <div class="field">
      <label class="label is-medium">Objet</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          type="text"
          name="message"
          placeholder="Objet du message"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="briefcase" />
        </span>
      </div>
    </div>
    <!-- Message -->
    <div class="field">
      <label class="label is-medium">Message</label>
      <div class="control">
        <textarea
          class="textarea"
          name="message"
          placeholder="Votre demande."
          rows="8"
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-primary" type="submit">
        Envoyer
      </button>
    </div>
  </form>
</template>
